(defproject bru-3 "0.5.0"
  :description "The logo."
  :url "http://brutalism.rs"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}

  :dependencies [[org.clojure/clojure "1.8.0"]
                 [org.clojure/clojurescript "1.9.293"]
                 [quil "2.5.0"]
                 [thi.ng/geom "0.0.743"]]
  :plugins [[lein-cljsbuild "1.1.4"]]
  :hooks [leiningen.cljsbuild]

  :cljsbuild {:builds
              [{:source-paths ["src"]
                :compiler {:output-to "web/js/logo.js"
                           :output-dir "out"
                           :main "bru-3.logo"
                           :optimizations :advanced
                           :pretty-print true}}]})
