<template>
  <div>
    <h1>MixGas01</h1>
    <SubTabMenu01 />
    {{Dil_O2_Val}}/{{depAta_Cal}}
    
  </div>
</template>

<script>
export default{
    data() {
        return{
            Dil_O2_Val: 21,
            Dil_N2_Val: 78,
            Dil_He_Val: 0,
            Bailout_O2_Val: 0,
            Bailout_N2_Val: 0,
            Bailout_He_Val: 0,
            Set_DEPTH_Val: 0,
            Set_END_Val: 0,
            Setpoint_Val: 0,
        }
    },
    computed: {
      //수심에 대한 절대압
      depAta_Cal() {
        return process.env.VUE_APP_projectId;
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
