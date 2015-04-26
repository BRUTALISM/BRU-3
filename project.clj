(defproject bru-3 "0.5.0"
  :description "The logo."
  :url "http://brutalism.rs"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}

  :dependencies [[org.clojure/clojure "1.7.0-beta2"]
                 [org.clojure/clojurescript "0.0-3196"]
                 [lein-light-nrepl "0.1.0"]
                 [quil "2.2.5"]
                 [thi.ng/geom "0.0.743"]]

  :plugins [[lein-cljsbuild "1.0.5"]]
  :hooks [leiningen.cljsbuild]

  :source-paths ["src/clj" "src/cljs"]

  :cljsbuild {:builds
              [{:source-paths ["src/clj" "src/cljs"]

                :compiler {:output-to "web/js/logo.js"
                           :output-dir "web/js"
                           :main "bru-3.logo"
                           :optimizations :advanced
                           :pretty-print true}}]}

  :repl-options {:nrepl-middleware [lighttable.nrepl.handler/lighttable-ops]})
