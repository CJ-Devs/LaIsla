import React from 'react'
import { Meteor } from 'meteor/meteor'
import { render } from 'react-dom'
import { renderRoutes } from '../imports/startup/Routes'
import './main.html'
import './styles/bootstrap.min.css'
import './styles/brands.min.css'
import './styles/all.min.css'
import './styles/fontawesome.min.css'
import './styles/regular.min.css'
import './styles/solid.min.css'
import './styles/svg-with-js.min.css'
import './styles/v4-shims.min.css'
import '../imports/startup/accounts-config';

Meteor.startup(() => {
  render(renderRoutes(), document.getElementById('render-target'))
})
