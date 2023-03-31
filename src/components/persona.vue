<script setup>
import { defineProps, ref } from 'vue';
import { pagar } from '../store/store';
const props = defineProps(["id", "numeroDePersona", "totalPorPersona", "Pago"]);

let pago = ref(false)

function handleChange(e) {
    pago = e.target.checked;
    pagar(props.id, pago)
}
</script>

<template>
    <div :class="['persona', props.Pago ? 'persona-pago' : 'persona-no-pago']">
        <div class="numero-persona">
            Persona {{ props.numeroDePersona }}
        </div>
        <div class="por-pagar">
            {{ new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
            }).format(props.totalPorPersona) }}
        </div>
        <div class="pago">
            <input type="checkbox" name="" id="" @change="handleChange">
        </div>
    </div>
</template>

<style scoped>
.persona {
    height: 200px;
    border-radius: 5px;
    font-size: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    overflow: hidden;
}

.persona-pago {
    border: solid 3px yellowgreen;
}

.persona-no-pago {
    border: solid 3px #ccc;
}

.numero-persona {
    background-color: black;
    padding: 10px;
    color: white;
    text-align: center;
}

.por-pagar {
    text-align: center;
    font-size: 30px;
    font-weight: bolder;
    color: yellowgreen;
}

.pago {
    background-color: #343f68;
    padding: 10px;
}
</style>