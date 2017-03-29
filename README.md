GaritaCenter
----

[![Build Status](https://travis-ci.org/garciadiazjaime/website-garitacenter.svg)](https://travis-ci.org/garciadiazjaime/website-garitacenter)

Run project:
----
a) let's install all packages:

`npm install`

b) let's run dev server

`npm run dev`

By default server will run on http://127.0.0.1:8080/

Note: `npm run sprites` requires 'sass'
http://sass-lang.com/install

Deploy project
`npm run update`
`git status`
`git diff`
`npm run deploy`

Login rch
rhc -l setup email

Remove Cartridge
http://stackoverflow.com/questions/31323791/how-do-you-delete-a-database-cartridge-on-an-openshift-app

Setting up Envs
rhc env set -a app DB_NAME=value
rhc env set -a app DB_USER=value
rhc env set -a app DB_PASSWORD=value
rhc env set -a app DJANGO_SETTINGS_MODULE=settings.prod
rhc env set -a app SENDGRID_API_KEY=value
rhc env set -a app NPM_CONFIG_PRODUCTION=true

Checking Envs
rhc env list -a app

Code to increase jslint max line length limit
/* eslint max-len: [2, 500, 4] */

Ads code
-- view.jade
script(src='//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js', async)
-- home/index.js
import Block2 from './block2';
<Block2 />
