<script setup lang="ts">
// Data
const tab = ref("");
</script>

<template>
  <div class="q-pt-sm">
    <h4
      class="row text-uppercase text-grey-8 justify-center content-center q-my-sm q-pb-md"
      style="font-family: &quot;Bebas Neue&quot;"
    >
      <div class="q-pt-sm">Horas suplementarias</div>
    </h4>
  </div>

  <div class="q-gutter-y-sm">
    <q-card flat>
      <q-tabs
        v-model="tab"
        dense
        class="bg-grey-2 text-grey-9"
        active-color="primary"
        indicator-color="primary"
        style="font-family: &quot;Oswald&quot;"
        align="justify"
        narrow-indicator
      >
        <q-tab name="horas" label="Registro de horas suplementarias" />
        <q-tab name="registros" label="Visualización de registros" />
      </q-tabs>

      <q-separator />

      <q-tab-panels v-model="tab" animated>
        <q-tab-panel name="horas">
          <HoraSuplementariaComponent />
        </q-tab-panel>

        <q-tab-panel name="registros">
          <RegistrosComponent />
        </q-tab-panel>
      </q-tab-panels>
    </q-card>
  </div>
</template>
