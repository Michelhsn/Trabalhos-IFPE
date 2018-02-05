<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="x" uri="http://java.sun.com/jsp/jstl/xml"%>

<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>Formulário</title>
    </head>
    <body>
        <h1>Formulário de Estados e Cidades</h1>
        

        <c:if test="${param.listarEstados == null}" >
            <form action="estados.jsp" method="POST">
                <input type="submit" value="Ir para o formulario" name="listarEstados" />
            </form>            
        </c:if>
        
        <c:if test="${param.listarEstados != null}" >
            <c:import url="cidades.xml" var="cidadesXML" />
            <x:parse doc="${cidadesXML}" var="cidades" />
            
            <form name="form" action="estados.jsp" method="post">
                <select name="listarEstados">
                    <option selected = "selected">Selecione Estado</option>
                    <x:forEach select="$cidades/root/estado" var="cidade">
                        <option  value="<x:out select='$cidade/@id'/>"><x:out select="$cidade/@name"/></option>
                    </x:forEach>
                </select>
                <select name="listaCidade">
                    <option>Selecione a Cidade</option>
                    <x:forEach select="$cidades/root/estado[@id=$param:listarEstados]/cidade" var="city">
                        <option selected = "selected" value="<x:out select='$city/@codigo'/>"><x:out select="$city/@name"/></option>
                    </x:forEach>
                </select>
                <input type="submit" value="Buscar"/>
            </form>
        </c:if>
    </body>
</html>