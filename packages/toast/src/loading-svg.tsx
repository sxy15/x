import { defineComponent } from "vue";

export default defineComponent({
  name: 'LoadingSvg',

  render() {
    return (
      <svg class="icon" viewBox="25 25 50 50">
        <circle cx="50" cy="50" r="20" fill="none"></circle>
      </svg>
    )
  }
})