<script>
import { Line, mixins } from 'vue-chartjs';

export default {
  extends: Line,
  // mixins: [mixins.reactiveData],
  props: {
    chartData: {
      type: Object,
      required: true,
    },
    options: {
      type: Object,
      default: null,
    },
  },
  mounted() {
    this.renderChart(this.chartData, this.options);
  },
};
</script>