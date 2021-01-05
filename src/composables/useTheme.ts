const { ref } = require("vue");

let isLightTheme = ref(true);

function toggleTheme() {
  isLightTheme.value = !isLightTheme.value;

  const bodyClass = document.body.classList;

  if (bodyClass.contains("light")) {
    bodyClass.add("dark");
    bodyClass.remove("light");
  } else {
    bodyClass.remove("dark");
    bodyClass.add("light");
  }
}

const useTheme = () => {
  return { isLightTheme, toggleTheme };
};

export default useTheme;
