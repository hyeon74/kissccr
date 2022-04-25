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
          <v-toolbar-title>MOD / END / EAD</v-toolbar-title>
          <v-spacer></v-spacer>
        </v-toolbar>
      </v-card>
    </div>
    <v-row>
      <v-col cols="12">
        <v-subheader class="pl-0">
          산소비율 O2(%)
        </v-subheader>
        <v-slider
          v-model="Dil_O2_Val"
          :thumb-color="'green lighten-1'"
          :color="'orange darken-3'"
          :label="'1.'"
          :rules="[rules.checkAmt.overO2Amt]"
          min="0"
          max="100"
          step="1"
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
      <v-col cols="12">
        <v-subheader class="pl-0">
          헬륨비율 He(%)
        </v-subheader>
        <v-slider
          v-model="Dil_He_Val"
          :track-color="'orange darken-3'"
          :thumb-color="'green lighten-1'"
          :color="'green lighten-1'"
          :label="'2.'"
          :rules="[rules.checkAmt.overHeAmt]"
          min="0"
          max="100"
          step="1"
          thumb-label
        >
          <template v-slot:append>
                <v-text-field
                  v-model="Dil_He_Val"
                  class="mt-0 pt-0"
                  type="number"
                  style="width: 60px"
                ></v-text-field>
              </template>
        </v-slider>
      </v-col>
      <v-col cols="12">
        <v-subheader class="pl-0">
          질소비율 N2(%)
        </v-subheader>
        <v-slider
          v-model="fN2_Cal"
          :label="'2.'"
          disabled
          readonly
          thumb-label
          min="0"
          max="100"
          step="1"
        >
          <template v-slot:append>
                <v-text-field
                  v-model="fN2_Cal"
                  class="mt-0 pt-0"
                  type="number"
                  style="width: 60px"
                ></v-text-field>
              </template>
        </v-slider>
      </v-col>
      <v-col cols="12">
        <v-subheader class="pl-0">
          목표수심 Depth(m)
        </v-subheader>
        <v-slider
          v-model="Depth_Val"
          :thumb-color="'green lighten-1'"
          :color="'red'"
          :label="'3.'"
          min="0"
          max="100"
          step="1"
          thumb-label
        >
          <template v-slot:append>
                <v-text-field
                  v-model="Depth_Val"
                  class="mt-0 pt-0"
                  type="number"
                  style="width: 60px"
                ></v-text-field>
              </template>
        </v-slider>
      </v-col>
      <v-col cols="12">
        <v-subheader class="pl-0">
          셋포인트 Setpoint(bar)
        </v-subheader>
        <v-slider
          v-model="Setpoint_Val"
          :thumb-color="'green lighten-1'"
          :color="'red'"
          :label="'4.'"
          min="0.5"
          max="1.6"
          step="0.1"
          thumb-label
        >
          <template v-slot:append>
                <v-text-field
                  v-model="Setpoint_Val"
                  class="mt-0 pt-0"
                  type="number"
                  style="width: 60px"
                ></v-text-field>
              </template>
        </v-slider>
      </v-col>
      <v-col cols="12">
        <v-subheader class="pl-0">
          딜리언트 ppO2 MOD(bar)
        </v-subheader>
        <v-slider
          v-model="ppO2_MOD_Val"
          :thumb-color="'green lighten-1'"
          :color="'red'"
          :label="'5.'"
          min="1.00"
          max="2.00"
          step="0.05"
          thumb-label
        >
          <template v-slot:append>
                <v-text-field
                  v-model="ppO2_MOD_Val"
                  class="mt-0 pt-0"
                  type="number"
                  style="width: 60px"
                ></v-text-field>
              </template>
        </v-slider>
      </v-col>
    </v-row>
    
  </v-container>
</template>

<script>
export default{
    data() {
        return{
            //MIX_MOD,
            //MIX_PPO2,
            Dil_O2_Val: 21,
            Dil_He_Val: 0,
            Dil_N2_Val: 79,
            Depth_Val: 30,
            Setpoint_Val: 1.3,
            ppO2_MOD_Val: 1.10,

            Bailout_O2_Val: 21,
            Bailout_N2_Val: 79,
            Bailout_He_Val: 0,
            Set_DEPTH_Val: 30,
            Set_END_Val: 30,
            rules: {
              checkAmt: {
                overO2Amt: v => this.overO2Amt(v),
                overHeAmt: v => this.overHeAmt(v),
              }
            },
        }
    },
    computed: {
      //1-1. MOD
      mixMod_Cal() {
        //MOD = [(ppO2 / fO2) - 1] x 10
        //MOD = [(1.10 / 0.15) - 1] x 10 = 63m
        //this.MIX_MOD = this.ppO2_MOD_Val / (this.Dil_O2_Val/100)
        
      },
      //1-2. ppO2
      mixPpO2_Cal() {
        //ppO2 = 산소 함량 x 주변압(bar)
      
      },
      
      //2.0.1. 수심에 대한 절대압
      depAta_Cal() {
        /*
        get(){
          return 'depAta_Cal';
        }
        */
      },
      //2.0.2. END에 대한 절대값
      endAta_Cal() {
        //return 'endAta_Cal';
      },
      //2.1.0. 산소 부분압
      ppO2_Cal() {
        //pO2 (Setpoint = 산소 부분압) = 1.3
        //return 'pO2Cal';
      },
      //2.1. 산소 (O2) : 산소 비율
      fO2_Cal() {
        //fO2 = pO2 / 수심(bar) = 1.3 / 7 = 0.19 = 19%
        //return 'fO2_Cal';
      },
      //2.2.0.질소 부분압
      ppN2_Cal() {
        //pN2 (질소 부분압) = (주변압 - 산소 부분압) / (희석 기체 헬륨 함량 + 질소 함량) x 질소 함량
        //return 'ppN2_Cal';
      },
      //2.2. 질소 (N2) : 질소 비율
      fN2_Cal() {
        //pN2 = (7 - 1.3) / (40 + 45) x 45 = 3.02 bar
        //return 'fN2_Cal';
        return 100 - this.Dil_O2_Val - this.Dil_He_Val
      },
      //2.3.0. 부분압
      ppHe_Cal() {
        //pHE (헬륨 부분압) = (주변압 - 산소 부분압) / (희석 기체 헬륨 함량 + 질소 함량) x 헬륨 함량\
        //return 'ppHe_Cal';
      },
      //2.3. 질소 (N2) : 헬륨 비율
      fHe_Cal() {
  
      }

    },
    methods: {
       overO2Amt(v){
        if(this.Dil_He_Val + v > 100){
          this.Dil_He_Val = 100 - v
          return true
        }else{
          return false
        }
      },
      overHeAmt(v){
        if(this.Dil_O2_Val + v > 100){
          this.Dil_O2_Val = 100 - v
          return true
        }else{
          return false
        }
      },
        
    }
}
</script>
