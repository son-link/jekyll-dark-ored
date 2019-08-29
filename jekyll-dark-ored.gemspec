# frozen_string_literal: true

Gem::Specification.new do |spec|
  spec.name          = "jekyll-dark-ored"
  spec.version       = "0.2.0"
  spec.authors       = ["Alfonso Saavedra \"Son Link\""]
  spec.email         = ["sonlink.dourden@gmail.com"]

  spec.summary       = "A simple dark orange red theme for Jekyll."
  spec.homepage      = "https://github.com/son-link/jekyll-dark-ored"
  spec.license       = "GPL3"

  spec.files         = `git ls-files -z`.split("\x0").select { |f| f.match(%r!^(assets|_layouts|_includes|_sass|LICENSE|README|search.json)!i) }

  spec.add_runtime_dependency "jekyll", "~> 4.0"

  spec.add_development_dependency "bundler", "~> 1.16"
  spec.add_development_dependency "rake", "~> 12.0"
end
