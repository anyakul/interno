import { createStore } from 'vuex';

export const store = createStore({
  state() {
    return {
      news: [
        {
          id: 1,
          category: 'Kitchan Design',
          header: 'Let’s Get Solution For Building Construction Work',
          date: '22 December,2022',
          image: require('@/assets/img/photo-6.png')
        },
        {
          id: 2,
          category: 'Living Design',
          header: 'Low Cost Latest Invented Interior Designing Ideas.',
          date: '22 December,2022',
          image: require('@/assets/img/photo-6.png')
        },
        {
          id: 3,
          category: 'Interior Design',
          header: 'Best For Any Office & Business Interior Solution',
          date: '25 December,2022',
          image: require('@/assets/img/photo-7.png')
        },
      ],
      projects: [
        {
          id: 1,
          category: 'Decor / Artchitecture',
          header: 'Modern Kitchan',
          date: '26 December,2022',
          image: require('@/assets/img/photo-1.png'),
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo.'
        },
        {
          id: 2,
          category: 'Decor / Artchitecture',
          header: 'Modern Kitchan',
          date: '26 December,2022',
          image: require('@/assets/img/photo-2.png'),
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo.'
        },
        {
          id: 3,
          category: 'Decor / Artchitecture',
          header: 'Modern Kitchan',
          date: '26 December,2022',
          image: require('@/assets/img/photo-3.png'),
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo.'
        },
        {
          id: 4,
          category: 'Decor / Artchitecture',
          header: 'Modern Kitchan',
          date: '26 December,2022',
          image: require('@/assets/img/photo-4.png'),
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo.'
        }
      ]
    }
  },
  getters: {
    newsById(state) {
      return newsId => {
        return state.news.find(news => news.id === newsId)
      }
    },
    projectById(state) {
      return projectId => {
        return state.projects.find(project => project.id === projectId)
      }
    }
  }
})
