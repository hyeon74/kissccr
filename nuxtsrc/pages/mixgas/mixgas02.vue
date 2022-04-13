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
            MIX_MOD,
            MIX_PPO2,
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
      //1-1. MOD
      mixMod_Cal(){
        //MOD = [(ppO2 / fO2) - 1] x 10
        //MOD = [(1.10 / 0.15) - 1] x 10 = 63m
        this.MIX_MOD = this.mixPpO2_Cal() 
        
      },
      //1-2. ppO2
      mixPpO2_Cal(){
        //ppO2 = 산소 함량 x 주변압(bar)
      
      },
      
      //2.0.1. 수심에 대한 절대압
      depAta_Cal() {
        
        return 'depAta_Cal';
      },
      //2.0.2. END에 대한 절대값
      endAta_Cal() {
        return 'endAta_Cal';
      },
      //2.1.0. 산소 부분압
      ppO2_Cal() {
        //pO2 (Setpoint = 산소 부분압) = 1.3
        return 'pO2Cal';
      },
      //2.1. 산소 (O2) : 산소 비율
      fO2_Cal() {
        //fO2 = pO2 / 수심(bar) = 1.3 / 7 = 0.19 = 19%
        return 'fO2_Cal';
      },
      //2.2.0.질소 부분압
      ppN2_Cal() {
        //pN2 (질소 부분압) = (주변압 - 산소 부분압) / (희석 기체 헬륨 함량 + 질소 함량) x 질소 함량
        return 'ppN2_Cal';
      },
      //2.2. 질소 (N2) : 질소 비율
      fN2_Cal() {
        //pN2 = (7 - 1.3) / (40 + 45) x 45 = 3.02 bar
        return 'fN2_Cal';
      },
      //2.3.0. 부분압
      ppHe_Cal() {
        //pHE (헬륨 부분압) = (주변압 - 산소 부분압) / (희석 기체 헬륨 함량 + 질소 함량) x 헬륨 함량\
        return 'ppHe_Cal';
      },
      //2.3. 질소 (N2) : 헬륨 비율
      fHe_Cal() {
        //pHE = (7 - 1.3) / (40 + 45) x 40 = 2.68 bar
        return 'fHe_Cal';
      }

    },
    methods: {
        
    }
}
</script>
