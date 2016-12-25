
; @file index.hy
; @description wrapper client to api

(require hy.contrib.meth)
(import [flask [Flask render-template]])

(setv app (Flask "__main__"))

(route repl "/" [] (render-template "index.html"))
