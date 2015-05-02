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

  :source-paths ["src/cljx"]

  :profiles {:dev {:plugins [[com.keminglabs/cljx "0.6.0"]
                             [lein-cljsbuild "1.0.5"]]}}

  :auto-clean false
  :cljx {:builds [{:source-paths ["src/cljx"]
                   :output-path "target/classes"
                   :rules :clj}

                  {:source-paths ["src/cljx"]
                   :output-path "target/classes"
                   :rules :cljs}]}

  :cljsbuild {:builds
              [{:source-paths ["target/classes" "src/cljs"]
                :compiler {:output-to "web/js/logo.js"
                           :output-dir "web/js"
                           :main "bru-3.logo"
                           :optimizations :advanced
                           :pretty-print true}}]}

  :prep-tasks [["cljx" "once"] "javac" "compile"]

  :repl-options {:nrepl-middleware [lighttable.nrepl.handler/lighttable-ops]})
