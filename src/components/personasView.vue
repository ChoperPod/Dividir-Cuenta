<script setup>
import { store, getGrandTotal } from '../store/store';
import Label from './label.vue'
import Persona from './persona.vue'
</script>

<template>
    <div class="no-items" v-if="store.personasArray.length === 0">No items</div>
    <div class="personas-view" v-if="store.personasArray.length > 0">
        <div class="header">
            <div>
                <Label title="Total + Propina: " :value="getGrandTotal()"></Label>
            </div>
            <div>
                <Label title="Restante: " :value="store.params.restante"></Label>
            </div>
        </div>
        <div class="personas-container">
            <!-- {{ persona.totalXPersona }}</div> -->
            <Persona v-for="persona in store.personasArray" :key="persona.id" :id="persona.id"
                :numero-de-persona="persona.numeroPersona" :total-por-persona="persona.totalXPersona"
                :pagado="persona.pagado" />
        </div>
    </div>
</template>

<style scoped>
.no-items {
    width: 100%;
    height: 100hv;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 28px;
}

.personas-view {
    margin: 0 auto;
    display: flex;
    align-items: center;
    flex-direction: column;
}

.personas-container {
    width: 800px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: auto;
    gap: 10px;
}

.header {
    color: white;
    font-weight: bolder;
    padding: 20px 0;
    font-size: 28px;
    display: flex;
    justify-content: space-between;
    gap: 10px;
    flex-direction: column;
}
</style>