<template>
  <v-card>
    <v-card-title>
      가상결제일자 {{ stldate }}
    </v-card-title>
     <v-card-title>
      3일 영업일 {{ workdate3 }}
    </v-card-title>
     <v-card-title>
      셋팅 결제일 {{ setStldate }}
    </v-card-title>
    <v-btn @click="test">
        test
    </v-btn>
  </v-card>
</template>
<script>
export default {
    data() {
        return {
            stldate : '00000000',
            stlday: '07',
            currdate : '20220410',
            currmonth : '',
            currday : '',
            workdate3 : '',
            setStldate : '',
        }
  },
  computed: {
      //결제일 판단
      setStlDay(){
          this.currmonth = this.$moment(this.currdate,'YYYYMMDD').format('YYYYMM');
          let currday = this.$moment(this.currdate,'YYYYMMDD').format('DD');
          //alert(currday);
          if(currday > this.stlday){
              this.stldate = (this.$moment(this.currdate,'YYYYMMDD')).add(1, 'months').format('YYYYMM') + this.stlday
              //this.stldate = this.stldate + this.stlday
          }else{
              this.stldate = this.$moment(this.currdate,'YYYYMMDD').format('YYYYMM') + this.stlday
              //this.stldate = this.stldate + this.stlday
          }
          //this.stldate = 
          //this.stldate = this.$moment('20221010','YYYYMMDD').format('YYYY-MM-DD');
          //this.stldate = this.$moment('20221010','YYYYMMDD').format('YYYYMM');
          //this.stldate = '1111';
          //.add(7, 'months')
      },
      //현제일 기준 3영업일 조회
      //결제일 판단
      work3Day(){
          this.workdate3 = (this.$moment(this.currdate,'YYYYMMDD')).add(3, 'day').format('YYYYMMDD')
      },

      case1() {
        this.setStldate = this.stldate;
      },

      case2(){
        let work3month =  this.$moment(this.workdate3,'YYYYMMDD').format('YYYYMM') 
        if(this.currmonth == work3date){
          this.setStldate = (this.$moment(this.currdate,'YYYYMMDD')).add(1, 'months').format('YYYYMM') + this.stlday
        }else{
          this.setStldate = this.$moment(this.workdate3,'YYYYMMDD').add(1, 'months').format('YYYYMM') + this.stlday
        }
        
      },

  },
  methods: {
   async test() {
      //결제일 판단
      await this.setStlDay();
      //현재일 기준 3영업일 조회
      await this.work3Day();
      //case:1
      if(this.workdate3 <= this.stldate){
        await this.case1()
      }else
        await this.case2()
      }
      //case:2
      
    
  }
}
</script>
