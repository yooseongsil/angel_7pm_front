const commonMixins = {
  data: () => ({
    isApplied: false,
    hacksIngList: null
  }),
  created () {
    this.getHacksIngList()
  },
  methods: {
    getHacksIngList () {
      this.$http.get('/hacks?is_mine=true')
        .then(({ data }) => {
          this.isApplied = data.results.length > 0
          if (this.isApplied) {
            this.hacksIngList = data.results[0]
          }
        })
        .catch(error => {
          console.log(error)
        })
    }
  }
}

export default commonMixins
