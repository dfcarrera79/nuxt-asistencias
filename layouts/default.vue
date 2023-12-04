<script setup lang="ts">
import { ref } from "vue";
import { useQuasar } from "quasar";
// import { storeToRefs } from "pinia";

// Data
const miniState = ref(true);
const { dark } = useQuasar();
const leftDrawerOpen = ref(false);
// const authStore = useAuthStore();
// const { darkMode } = storeToRefs(authStore);

// // Methods
// onMounted(() => {
//   authStore.setDarkMode(dark.isActive);
// });

// Methods
function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value;
}
</script>
<template>
  <q-layout view="lHh Lpr lFf">
    <q-header>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />
        <q-toolbar-title
          class="text-h4 row text-uppercase"
          style="font-family: &quot;Bebas Neue&quot;"
        >
          Control de asistencia
        </q-toolbar-title>

        <div class="row items-center content-center q-mr-md">
          <q-toggle
            :model-value="dark.isActive"
            checked-icon="dark_mode"
            unchecked-icon="light_mode"
            size="3rem"
            @update:model-value="(val) => dark.set(val)"
          />
          <q-btn flat dense>
            <div class="q-mr-sm" v-if="!($q.screen.lt.md || $q.screen.lt.sm)">
              Salir
            </div>
            <q-icon left name="logout" />
          </q-btn>
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      :width="320"
      :mini="miniState"
      @mouseover="miniState = false"
      @mouseout="miniState = true"
    >
      <img
        fit="fill"
        class="absolute-top q-pa-sm"
        src="/assets/loxasoluciones.png"
        style="height: 150px"
        v-show="!miniState"
      />
      <q-scroll-area
        style="
          height: calc(100% - 150px);
          margin-top: 150px;
          border-right: 1px solid #ddd;
        "
      >
        <q-list padding>
          <q-item class="column" v-show="!miniState">
            <q-separator inset />
            <div style="width: 300px; white-space: wrap; overflow: hidden">
              <div class="text-center">Bienvenido(a)</div>
              <!-- <div class="text-weight-bold text-center">
              {{ sessionData.usuario }}
            </div> -->
            </div>
            <q-separator inset />
          </q-item>

          <q-item clickable v-ripple to="/" active-class="my-menu-link">
            <q-item-section avatar>
              <q-icon name="home" />
            </q-item-section>

            <q-item-section>
              <span class="text-h6" style="font-family: &quot;Bebas Neue&quot;">
                PÁGINA DE INICIO
              </span>
            </q-item-section>
          </q-item>

          <q-separator />

          <q-item clickable v-ripple to="/usuarios" active-class="my-menu-link">
            <q-item-section avatar>
              <q-icon name="people_alt" />
            </q-item-section>

            <q-item-section>
              <span class="text-h6" style="font-family: &quot;Bebas Neue&quot;">
                GESTIÓN DE EMPLEADOS
              </span>
            </q-item-section>
          </q-item>

          <q-item
            clickable
            v-ripple
            to="/biometricos"
            active-class="my-menu-link"
          >
            <q-item-section avatar>
              <q-icon name="person_pin" />
            </q-item-section>

            <q-item-section>
              <span class="text-h6" style="font-family: &quot;Bebas Neue&quot;">
                REGISTROS BIOMÉTRICOS
              </span>
            </q-item-section>
          </q-item>

          <q-item clickable v-ripple to="/horarios" active-class="my-menu-link">
            <q-item-section avatar>
              <q-icon name="schedule" />
            </q-item-section>

            <q-item-section>
              <span class="text-h6" style="font-family: &quot;Bebas Neue&quot;">
                CONFIGURACIÓN DE HORARIOS
              </span>
            </q-item-section>
          </q-item>

          <q-item
            clickable
            v-ripple
            to="/excepciones"
            active-class="my-menu-link"
          >
            <q-item-section avatar>
              <q-icon name="ballot" />
            </q-item-section>

            <q-item-section>
              <span class="text-h6" style="font-family: &quot;Bebas Neue&quot;">
                GESTIÓN DE EXEPCIONES
              </span>
            </q-item-section>
          </q-item>

          <q-item
            clickable
            v-ripple
            to="/suplementarias"
            active-class="my-menu-link"
          >
            <q-item-section avatar>
              <q-icon name="more_time" />
            </q-item-section>

            <q-item-section>
              <span class="text-h6" style="font-family: &quot;Bebas Neue&quot;">
                Registro de horas suplementarias
              </span>
            </q-item-section>
          </q-item>

          <q-item
            clickable
            v-ripple
            to="/asistencias"
            active-class="my-menu-link"
          >
            <q-item-section avatar>
              <q-icon name="how_to_reg" />
            </q-item-section>

            <q-item-section>
              <span class="text-h6" style="font-family: &quot;Bebas Neue&quot;">
                REGISTRO DE ASISTENCIAS
              </span>
            </q-item-section>
          </q-item>
        </q-list>
      </q-scroll-area>
    </q-drawer>

    <q-page-container>
      <slot />
    </q-page-container>
  </q-layout>
</template>
