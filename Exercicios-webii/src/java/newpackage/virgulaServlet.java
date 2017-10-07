/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package newpackage;

import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 *
 * @author miche
 */
@WebServlet(name = "virgulaServlet", urlPatterns = {"/virgulaServlet"})
public class virgulaServlet extends HttpServlet {

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
            String numero = request.getParameter("inteiro");
            String[] numbers = numero.split(",");
            int[] answer = new int[numbers.length];
            for (int i = 0; i < numbers.length; i++)
                answer[i] = Integer.parseInt(numbers[i]);
            int aux;
            for(int i =0; i<numbers.length; i++){
                for(int j =0; j <numbers.length-1; j++){
                   if(answer[j]> answer[j+1]){
                        aux = answer[j];
                        answer[j] = answer[j+1];
                        answer[j+1] = aux;
                    }
                }
            }
            float media = 0, soma = 0;
           
            for (int i = 0; i < numbers.length; i++){
                soma = soma + answer[i]; 
                media = soma/(i+1);
            }
            
            out.print("<p> Média =  " + media + "</p>");
            
            if (numbers.length%2==0){
                float mediana = (float) ((answer[(answer.length/2)-1] + answer[(answer.length/2)])/2.0);
                out.print("<p> Mediana = " + mediana + " </p>" );
            }
            else{
                float mediana = answer[answer.length/2];
                out.print("<p> Mediana = " + mediana + " </p>" );
            }
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
