new Glider(document.querySelector('.glider'), {
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: true,
    arrows: {
        prev: '.btn-monthly',
        next: '.btn-year'
    },

    responsive: [
        {
          breakpoint: 775,
          settings: {
            slidesToShow: '2',
            slidesToScroll: 'auto',
            duration: 0.75
          }
        },{
          breakpoint: 996,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            duration: 0.75
          }
        }
      ]
})

new Glider(document.querySelector('.gallery-images'), {
  slidesToShow: 1,
  slidesToScroll: 1,
  draggable: true,
  dots: '#dots',

  responsive: [
      {
        breakpoint: 775,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          duration: 0.75
        }
      },
    ]
})


