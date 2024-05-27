<script>
import { Pie, mixins } from 'vue-chartjs';

export default {
  extends: Pie,
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
    if (!process.client) return;
    this.renderChart(this.chartData, this.options);
  },
};
</script>