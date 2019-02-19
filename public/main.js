// 'https://sdg-astro-api.herokuapp.com/api/'

class updatePage {
  constructor() {
    this.status = {
      launches: {
        upcoming: [],
        currentIndex: 0,
        countdown: null
      },
      imageOfTheDay: {
        copyright: 'loading',
        title: 'loading',
        url: ''
      }
    }
  }

  loadPage() {
    this.loadImageOfTheDay()
  }
  loadImageOfTheDay() {
    fetch('https://sdg-astro-api.herokuapp.com/api/Nasa/apod')
      .then(resp => resp.json())
      .then(imgConfirmation => {
        console.log(imgConfirmation)
        this.updateImageOfTheDay(imgConfirmation)
        this.renderPage()
      })
  }

  updateImageOfTheDay(imgConfirmation) {
    this.status.imageOfTheDay.title = imgConfirmation.title
    this.status.imageOfTheDay.copyright = imgConfirmation.copyright
    this.status.imageOfTheDay.url = imgConfirmation.url
  }
  renderImageOfTheDay() {
    const IOTD = document.querySelector('.IOTD')
    document.querySelector(
      '.image-title'
    ).textContent = this.status.imageOfTheDay.title
    document.querySelector('.copyright').textContent =
      this.status.imageOfTheDay.copyright || 'no copyright'
    IOTD.style.backgroundImage = `url(${this.status.imageOfTheDay.url})`
  }
  renderNextLaunches() {
    // Need to render the upcoming launches to the screen
    // Remove the previous launch information
    // Add upcoming launch information
    // Call to render page to update the information displayed
  }
  startCountdown() {
    // Create count down clock to launch
    // Provide current launch info time and count back
    // Provide accurate times per timezone
  }
  goToNextLaunch() {
    // Upon button click load next launch
    // Call for the next indexed launch info
    // Calls to load the launch info onto the page
  }
  goToPreviousLaunch() {
    // Upon button click load next launch
    // Call for the previously indexed launch info
    // Calls to load the launch info onto the page
  }

  loadUpcomingLaunches() {
    // Allows the launch information to be displayed onscreen
  }
}
  renderPage() {
    this.renderImageOfTheDay()
    // Need to add is update for launch functionality
  }

const updateThePage = new updatePage()

// LO: "something is loaded event"
// LO: Events : Browser fired events
document.addEventListener('DOMContentLoaded', () => updateThePage.loadPage())
