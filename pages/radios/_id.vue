<template>
<div >
  <div class="row pt-3">
    <h2 class="col-8 ml-4">{{$route.params.id}}</h2>
    <div class="col-2">
      <label>Ventana: </label>
      <select v-model="windowSize" @change="updateChart($event)" >
        <option value="1">12 hrs</option>
        <option value="2">24 hrs</option>
        <option value="3">36 hrs</option>
        <option value="4">48 hrs</option>
        <option value="5">60 hrs</option>
        <option value="6">72 hrs</option>
      </select>
      <br/>
      {{this.dataLabels[0]}} - {{this.dataLabels[this.dataLabels.length-1]}}
    </div>
  </div>

  <div class="col-12 mt-3">
    <chartist class="col-12"
        ratio="ct-major-second"
        type="Line"
        :data="{labels: this.dataLabels, series:[this.dataValues]}"
        :options="chartOptions" >
    </chartist>

  </div>




</div>
</template>

<script>
  import axios from 'axios'

  export default {
    data() {
      return {
          dataLabelsSrc: [],
          dataValuesSrc: [],
          dataLabels: [],
          dataValues: [],
          windowSize: 1,
          chartData: {
              labels: this.dataLabels,
              series:[this.dataValues]
          },
          chartOptions: {
              lineSmooth: true,
              height: 780,
              high: 100,
              low: 0,
              showArea: true

          }
      }
    },
    created() {
      let uri = `/api/folders/labels/${this.$route.params.id}`;
      axios.get(uri).then(response => {
        this.dataLabelsSrc = response.data;
        console.log('Label Src: ' + this.dataLabelsSrc.length)

          let sizeLabelArr = this.dataLabelsSrc.length

          this.dataLabels = this.dataLabelsSrc.slice(sizeLabelArr-145, sizeLabelArr);
          this.cleanLabels()
          console.log('Label Arr: ' + this.dataLabels.length)

      });

      let uri2 = `/api/folders/values/${this.$route.params.id}`;
      axios.get(uri2).then(response => {
        this.dataValuesSrc = response.data;
        console.log('Value Src: ' + this.dataValuesSrc.length)

          let sizeValuesArr = this.dataValuesSrc.length

          this.dataValues = this.dataValuesSrc.slice(sizeValuesArr-145, sizeValuesArr);
          console.log('Value Arr: ' + this.dataValues.length)

      });


    },
    methods:{
      updateChart(event){
        let labelsDataTemp = []
        let valuesDataTemp = []
        if(this.windowSize==1){
          let sizeLabelArr = this.dataLabelsSrc.length
          this.dataLabels = this.dataLabelsSrc.slice(sizeLabelArr-145, sizeLabelArr);
          let sizeValuesArr = this.dataValuesSrc.length
          this.dataValues = this.dataValuesSrc.slice(sizeValuesArr-145, sizeValuesArr);
          this.cleanLabels()
        }else if(this.windowSize==2){
          let sizeLabelArr = this.dataLabelsSrc.length
          this.dataLabels = this.dataLabelsSrc.slice(sizeLabelArr-287, sizeLabelArr);
          let sizeValuesArr = this.dataValuesSrc.length
          this.dataValues = this.dataValuesSrc.slice(sizeValuesArr-287, sizeValuesArr);
          this.cleanLabels()
        }else if(this.windowSize==3){
          let sizeLabelArr = this.dataLabelsSrc.length
          this.dataLabels = this.dataLabelsSrc.slice(sizeLabelArr-431, sizeLabelArr);
          let sizeValuesArr = this.dataValuesSrc.length
          this.dataValues = this.dataValuesSrc.slice(sizeValuesArr-431, sizeValuesArr);
          this.cleanLabels()
        }else if(this.windowSize==4){
          let sizeLabelArr = this.dataLabelsSrc.length
          this.dataLabels = this.dataLabelsSrc.slice(sizeLabelArr-575, sizeLabelArr);
          let sizeValuesArr = this.dataValuesSrc.length
          this.dataValues = this.dataValuesSrc.slice(sizeValuesArr-575, sizeValuesArr);
          this.cleanLabels()
        }else if(this.windowSize==5){
          let sizeLabelArr = this.dataLabelsSrc.length
          this.dataLabels = this.dataLabelsSrc.slice(sizeLabelArr-719, sizeLabelArr);
          let sizeValuesArr = this.dataValuesSrc.length
          this.dataValues = this.dataValuesSrc.slice(sizeValuesArr-719, sizeValuesArr);
          this.cleanLabels()
        }else if(this.windowSize==6){
          let sizeLabelArr = this.dataLabelsSrc.length
          this.dataLabels = this.dataLabelsSrc.slice(sizeLabelArr-863, sizeLabelArr);
          let sizeValuesArr = this.dataValuesSrc.length
          this.dataValues = this.dataValuesSrc.slice(sizeValuesArr-863, sizeValuesArr);
          this.cleanLabels()
        }

        console.log('Label Src: ' + this.dataLabelsSrc.length)
           console.log('Label Arr: ' + this.dataLabels.length)
           console.log('Value Src: ' + this.dataValuesSrc.length)
           console.log('Value Arr: ' + this.dataValues.length)

      },
      cleanLabels(){
        for(var i = 1; i<this.dataLabels.length-1; i++){
          if(i%12==0){
          }else{
            this.dataLabels[i]=''
          }
        }
      }
    }

  }
</script>

<style>

.ct-label.ct-horizontal.ct-end {
    transform: rotate(60deg) translateX(-7px) translateY(8px);
    font-weight: bold;
    font-size: 11px;


}

</style>
