(defproject bru-3 "0.5.0"
  :description "The logo."
  :url "http://brutalism.rs"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}

  :dependencies [[org.clojure/clojure "1.7.0-beta1"]
                 [org.clojure/clojurescript "0.0-3196"]
                 [lein-light-nrepl "0.1.0"]
                 [quil "2.2.4"]
                 [thi.ng/geom "0.0.743"]]

  :plugins [[lein-cljsbuild "1.0.5"]]
  :source-paths ["src/clj" "src/cljs"]
  :clean-targets ["resources/public/js/logo.js"]

  ;; cljsbuild options configuration
  :cljsbuild {:builds
              [{;; CLJS source code path
                :source-paths ["src/cljs"]

                ;; Google Closure (CLS) options configuration
                :compiler {;; CLS generated JS script filename
                           :output-to "resources/public/js/logo.js"

                           ;; minimal JS optimization directive
                           :optimizations :whitespace

                           ;; generated JS code prettyfication
                           :pretty-print true}}]}

  :repl-options {:nrepl-middleware [lighttable.nrepl.handler/lighttable-ops]})
