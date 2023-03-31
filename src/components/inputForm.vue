<script setup>
import { ref } from 'vue';
import { store, calcularPartes } from '../store/store';

const total = ref(0);
const propina = ref(0);
const personas = ref(0);

function handleSubmit() {
    store.params.total = total;
    store.params.propina = propina;
    store.params.personas = personas
    calcularPartes();
}
</script>

<template>
    <form action="">
        <div class="form-container">
            <div>
                <label for="total">Total</label>
                <input type="number" required v-model="total">
            </div>
            <div>
                <label for="propina">Propina %</label>
                <input type="number" required v-model="propina">
            </div>
            <div>
                <label for="personas">Personas</label>
                <input type="number" required v-model="personas">
            </div>
            <div>
                <form action="" @submit.prevent="handleSubmit">
                    <input type="submit" value="calcular Partes" />
                </form>
            </div>
        </div>
    </form>
</template>

<style scoped>
form {
    width: 400px;
    background-color: rgb(23, 129, 78);
    align-items: center;
    color: white;
    font-size: 18px;
    padding: 20px;
}

.form-container {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;
}

form label {
    display: block;
}

form input {
    padding: 10px;
    width: 100%;
    box-sizing: border-box;
    font-size: 18px;
}
</style>