import React from 'react'
import { Meteor } from 'meteor/meteor'
import { render } from 'react-dom'
import { renderRoutes } from '../imports/startup/Routes'
import './main.html'
import './styles/bootstrap.min.css'

Meteor.startup(() => {
  render(renderRoutes(), document.getElementById('render-target'))
})
