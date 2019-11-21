---
layout: default
---
<head><style>
body {
  font-size: 14px;
  line-height: 1.2;
  padding:6px;
}
</style></head>

# <center>Notes for VBA</center>

## For web scraping

- create a new macro enabled workbook
- go to developer tab
- Visual basic editor
- LHS rightclick on Sheet1
-Insert
-Module

- Reference object libraries - tools - references
  - microsoft html object library (there is also microsoft internet control module)
  - and microsoft xml v 6.0 (allows us to make http requests without a web browser)


- create new subroutine in the module space  
      Sub GetVideoPage()
- XMLReq autoinstancing variable - libraries
      Dim XMLReq as New MSXML2.XMLHTTP60
- to store
      dim HTMLDoc As New MSHTML.HTMLDocument
- open http req
      XMLReq.Open "GET", "http://www.wiseowl.co.uk/videos/", False
- send request
      XMLReq.send
-check request succeeded
      If XMLReq.Status <> 200 Then
                      MsgBox "Problem" & vbNewLine & XMLReq.Status & XMLReq.statusText
      Exit sub
      End if

- search page

    HTMLDoc.body.innerHTML = XMLReq.responseText

- declae variables to lookup
     Dim VidCats As MSHTML.IHTMLElementCollection
        End Sub

- print






[back](./)
