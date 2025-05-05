new Vue({
  el: "#app",
  data() {
    return {
      isOpenedTop: true,
      items: [
        {
          img1: "images/couple2.jpg",
          img2: "images/couple1.jpg",
          img3: "images/couple3.jpg",
          title: "With Keii",
          isOpen: false,
        },
        {
          img1: "images/syaskia2.jpg",
          img2: "images/syaskia3.jpg",
          img3: "images/syaskia1.jpg",
          title: "Syaskia",
          isOpen: false,
        },
        {
          img1: "images/comei2.jpg",
          img2: "images/mood5.jpg",
          img3: "images/comei1.jpg",
          title: "Comeiii",
          isOpen: false,
        },
        {
          img1: "images/cantik2.jpg",
          img2: "images/cantik3.jpg",
          img3: "images/cantik1.jpg",
          title: "Keii's Mood",
          isOpen: false,
        },
        {
          img1: "images/mood4.jpg",
          img2: "images/mood1.jpg",
          img3: "images/mood3.jpg",
          title: "Super Cantik",
          isOpen: false,
        },
      ],
    };
  },
  methods: {
    topOpen() {
      this.isOpenedTop = !this.isOpenedTop;
    },

    open(idx, isOpen) {
      if (this.isOpenedTop) {
        this.items[idx].isOpen = !isOpen;
      }
    },

    reset() {
      this.items.forEach((item) => (item.isOpen = false));
      this.isOpenedTop = false;
    },
  },
});
