---
layout: page
title: About
permalink: /about/
---

# jekyll-dark-ored

A simple and dark theme for Jekyll. **Under development**

Responsive images, tables and iframes (for include videos of **Youtube**, **Vimeo** or similar services)
A minimal pure javascript code for toggle menu and responsive tables.
Icon font make with [Fontello](http://fontello.com/)

Support socials networks links (simple add the links on your _config.yml):

* Facebook
* Twitter
* Pinterest
* Youtube
* Vimeo
* Instagram
* Linkedin

If you need a icon for others socials networks create a new issue on theme repository.

Browser compatibility:

* Firefox
* Chrome/Chromium
* Edge
* Internet Explorer 10
* Opera

## Installation

Add this lines to your Jekyll site's `Gemfile`:

```ruby
gem "jekyll-dark-ored"
gem "jekyll-paginator" # This line isn't necessary if you use github-pages
```

Add this lines to your Jekyll site's `_config.yml`:

```yaml
theme: jekyll-dark-ored
plugins:
- jekyll-paginate
paginate: 5 # Posts per page
paginate_path: "page:num/"
```

Rename **index.md** to **index.html** and change this line, `layout: home` to `layout: default`

And then execute:

    $ bundle

Or install it yourself as:

    $ gem install jekyll-dark-ored

### Social links:

For activate social links add these lines on your _config.yml:

```yaml
social_links: true  # If true show social links
facebook:
github:
instagram:
linkedin:
pinterest:
twitter:
site.vimeo:
youtube:
```
Just add the ones you're going to use.

### Responsive iframe for Youtube, Google Maps, etc:

Insert the iframe code into a div whit the class **resp-iframe** and remove **width** and **height** attributes, like this:

```html
<div class="resp-iframe">
  <iframe  src="https://www.youtube.com/embed/<videoID>" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
</div>
```

This theme use [MicroCSS](https://son-link.github.io/microcss/index.html) CSS framework.

## License

The theme is available as open source under the terms of the [GNU/GPL3](https://opensource.org/licenses/GPL-3.0).
