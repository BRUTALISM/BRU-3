(defproject bru-3 "0.5.0"
  :description "The logo."
  :url "http://brutalism.rs"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :dependencies [[org.clojure/clojure "1.6.0"]
                 [lein-light-nrepl "0.1.0"]
                 [quil "2.2.4"]
                 [thi.ng/geom "0.0.743"]]
  :repl-options {:nrepl-middleware [lighttable.nrepl.handler/lighttable-ops]})
