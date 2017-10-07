/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package newpackage;

import java.io.IOException;
import java.io.PrintWriter;
import static java.lang.Integer.parseInt;
import static java.lang.System.out;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 *
 * @author ALUNO
 */
@WebServlet(name = "NewServlet", urlPatterns = {"/NewServlet"})
public class NewServlet extends HttpServlet {

    /**
     * Processes requests for both HTTP <code>GET</code> and <code>POST</code>
     * methods.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.setContentType("text/html;charset=UTF-8");
        try (PrintWriter out = response.getWriter()) {
            String inteiro = request.getParameter("inteiro");            
            int num = parseInt(inteiro); 
                out.print("<p><b> O número digitado é: </b></p>"); 
                
                if (num%2 == 0){
                    out.println("<p> Par </p>");
                }
                else {
                    out.print("<p> Ímpar </p>");
                }
                
		if (num>0){
                    out.print("<p> Positivo </p>");
                }
                else if (num<0){
                    out.print("<p> Negativo </p>");
                }
                else{
                    out.print("<p> Nulo </p>");
                }
                if (num>10){
                    out.print("<p> Maior que 10 </p>");
                }
                else if (num<10){
                    out.print("<p> Menor que 10 </p>");
                }
                else{
                    out.print("<p> Igual a 10 </p>");
                }
                if (num==1){
                    out.print("<p> Não Primo </p>");
                }
                else if (num==2){
                    out.print("<p> Primo </p>");
                }
                else if (num==3){
                    out.print("<p> Primo </p>");
                }
                else if (num%3==0){
                    out.print("<p> Não Primo </p>");
                }
                else if (num%2==0){
                    out.print("<p> Não Primo </p>");
                }
                else{
                int i = 5;
                int w = 2;
                int j = 0;
                while (i*i <= num){
                    if (num%i==0){
                        out.print("<p> Não Primo </p>");
                        j = -1;
                    }
                    i += w;
                    w = 6-w;
                }
                if (j!=-1){
                    out.print("<p> Primo </p>");
                }
                }
                int j = 0;
                for (int i=0; i<=num; i++){
                    if (i*(i+1)/2 == num){
                        out.print("<p> Triangular </p>");
                        j = -1;
                        break;
                    }
                }
                if (j!=-1){
                    out.print("<p> Não Triangular </p>");
                }
                int resto, soma = 0;
                
                for (int i = 1; i<num; i++){
                    
                    resto = num%i;
                    if (resto == 0){
                        soma = soma + i;
                    }                  
                }
                if (soma == num){
                    out.print("<p> Perfeito </p>");
                }
                else{
                    out.print("<p> Não Perfeito </p>");
                }
                if (num % 4 == 0 && (num % 400 == 0 || num % 100 != 0)) {
                    out.print("Bissexto");
  
                }
  
                else {
                    out.print("Não Bissexto");
                }
                double fat = 1;
                for( int i = 2; i <= num; i++ )
                    { 
                        fat *= i;
                    }
                out.println( "<p> Fatorial = " + fat + "</p>" );
               int result = 0;
	      
	      if(num <= 1){
	    	result = num;  
	      }else{
		      int[] fibs = new int[num + 1];
		      
		      fibs[0] = 0;
		      fibs[1] = 1;
		      for(int i = 2; i < num + 1; ++i){
		    	  fibs[i] = fibs[i - 1] + fibs[i - 2];
		      }
	    	  result = fibs[num];
	      }
		    out.print("<p>Fibonacci = " + result + "</p");
	    }
        }
    

    // <editor-fold defaultstate="collapsed" desc="HttpServlet methods. Click on the + sign on the left to edit the code.">
    /**
     * Handles the HTTP <code>GET</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
    }

    /**
     * Handles the HTTP <code>POST</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
    }

    /**
     * Returns a short description of the servlet.
     *
     * @return a String containing servlet description
     */
    @Override
    public String getServletInfo() {
        return "Short description";
    }// </editor-fold>

}
