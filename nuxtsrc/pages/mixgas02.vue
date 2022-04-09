<template>
  <v-container fluid>
    <div>
      <SubTabMenu01 />
    </div>
    <div>
      <v-card
        color="grey lighten-4"
        flat
        height="140px"
        tile
      >
        <v-toolbar extended>
          <v-app-bar-nav-icon></v-app-bar-nav-icon>
          <v-toolbar-title>MIX GAS 02</v-toolbar-title>
          <v-spacer></v-spacer>
        </v-toolbar>
      </v-card>
    </div>
    <v-row>
      <v-col cols="12">
        <v-subheader class="pl-0">
          MIXGAS02
        </v-subheader>
        <v-slider
          v-model="Dil_O2_Val"
          thumb-label
        >
          <template v-slot:append>
                <v-text-field
                  v-model="Dil_O2_Val"
                  class="mt-0 pt-0"
                  type="number"
                  style="width: 60px"
                ></v-text-field>
              </template>
        </v-slider>
      </v-col>

    </v-row>
    
    <!--
    <v-card
      max-width="900"
      class="mx-auto"
    >
      <v-toolbar
        :color="selection.length ? 'grey darken-4' : 'deep-purple accent-4'"
        dark
      >
        <v-app-bar-nav-icon v-if="!selection.length"></v-app-bar-nav-icon>
        <v-btn
          v-else
          icon
          @click="selection = []"
        >
          <v-icon>mdi-close</v-icon>
        </v-btn>

        <v-toolbar-title>
          {{ selection.length ? `${selection.length} selected` : 'Photos' }}
        </v-toolbar-title>
        <v-spacer></v-spacer>
      </v-toolbar>
      [VALUE]
     
    </v-card>
    -->
  </v-container>
</template>

<script>
export default{
    data() {
        return{
            Dil_O2_Val: 21,
            Dil_N2_Val: 79,
            Dil_He_Val: 0,
            Bailout_O2_Val: 21,
            Bailout_N2_Val: 79,
            Bailout_He_Val: 0,
            Set_DEPTH_Val: 30,
            Set_END_Val: 30,
            Setpoint_Val: 1.3,
            ppO2_MOD: 1.10,
            selection: [],
            items: ['Foo', 'Bar', 'Fizz', 'Buzz'],
        }
    },
    computed: {
      //수심에 대한 절대압
      depAta_Cal() {
        return 'depAta_Cal';
      },
      //END에 대한 절대값
      endAta_Cal() {
        return 'endAta_Cal';
      },
      //산소 부분압
      ppO2_Cal() {
        return 'pO2Cal';
      },
      //산소 비율
      fO2_Cal() {
        return 'fO2_Cal';
      },
      //질소 부분압
      ppN2_Cal() {
        return 'ppN2_Cal';
      },
      //질소 비율
      fN2_Cal() {
        return 'fN2_Cal';
      },
      //헬륨 부분압
      ppHe_Cal() {
        return 'ppHe_Cal';
      },
      //헬륨 비율
      fHe_Cal() {
        return 'fHe_Cal';
      }

    },
    methods: {
        
    }
}
</script>
