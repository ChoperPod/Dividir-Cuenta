import { reactive } from "vue";

export const store = reactive({
    params: {
        total: 0, // total de la cuenta
        propina: 0, // porcentaje de propina sobre el total de la cuenta
        personas: 0, // numero de personas entre las que se va a dividir la cuenta
        restante: 0 //restante de la cuenta con propina por pagar
    },
    personasArray: [],
});

export function getGrandTotal() {
    return store.params.total * (store.params.propina / 100 + 1)
}

export function calcularPartes() {
    store.personasArray = [];
    const total = store.params.total;
    const propina = store.params.propina;
    const personas = store.params.personas
    const totalXPersona = (total * (propina / 100 + 1)) / personas;

    store.params.restante = getGrandTotal();

    for (let i = 0; i < personas; i++) {
        store.personasArray.push({
            id: crypto.randomUUID(),
            numeroPersona: i + 1,
            totalXPersona,
            pagado: false,
        });
    }
    calcularRestante();
}

function calcularRestante() {
    const faltanXPagar = store.personasArray.filter(item => !item.pagado);
    store.params.restante = faltanXPagar.reduce((acumulador, item) => {
        return acumulador += item.totalXPersona;
    }, 0);
}

export function pagar(id, pago) {
    const persona = store.personasArray.find(item => item.id === id);
    if (persona) {
        persona.pagado = pago;
        calcularRestante();
    }
}