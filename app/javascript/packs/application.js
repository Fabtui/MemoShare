// Entry point for the build script in your package.json
import "@hotwired/turbo-rails"
import "../controllers"
import "bootstrap"
import Rails from "@rails/ujs"
// import Turbolinks from "turbolinks"
import * as ActiveStorage from "@rails/activestorage"
// import "channels"

Rails.start()
// Turbolinks.start()
ActiveStorage.start()
