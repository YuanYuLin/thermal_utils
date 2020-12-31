package main

import (
        "io"
        "log"
        "net/http"
        "io/ioutil"
)

type Page struct {
        Title string
        Body  []byte
}

func helloHandler(w http.ResponseWriter, req *http.Request){
        io.WriteString(w, "Test\n")
}

func loadPage(title string) (*Page, error) {
        filename := "." + title 
        body, err := ioutil.ReadFile(filename)
        if err != nil {
                return nil, err
        }
        return &Page{Title: title, Body: body}, nil
}

func pageHandler(w http.ResponseWriter, req *http.Request){
	p, err := loadPage(req.URL.Path)
	if err != nil {
		io.WriteString(w, "<H1>" + req.URL.Path + " Not Found</H1>")
	} else {
		io.WriteString(w, string(p.Body))
	}
}

func jsHandler(w http.ResponseWriter, req *http.Request){
	p, err := loadPage(req.URL.Path)
	if err != nil {
		io.WriteString(w, "<H1>" + req.URL.Path + " Not Found</H1>")
	} else {
		w.Header().Set("Content-Type", "text/css")
		io.WriteString(w, string(p.Body))
	}
}

func main(){
        // Hello world, the web server

        http.HandleFunc("/page/", pageHandler)
        http.HandleFunc("/js/", jsHandler)
        http.HandleFunc("/hello", helloHandler)
        log.Fatal(http.ListenAndServe(":8080", nil))
}

