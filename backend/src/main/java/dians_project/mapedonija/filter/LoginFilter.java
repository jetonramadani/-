package dians_project.mapedonija.filter;

import dians_project.mapedonija.model.User;
import org.springframework.context.annotation.Profile;

import javax.servlet.*;
import javax.servlet.annotation.WebFilter;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@WebFilter
public class LoginFilter implements Filter {
    @Override
    public void init(FilterConfig filterConfig) throws ServletException {

    }

    @Override
    public void doFilter(ServletRequest servletRequest, ServletResponse servletResponse, FilterChain filterChain) throws IOException, ServletException {

        HttpServletRequest request = (HttpServletRequest) servletRequest;       //vrsime kastiranje vo HttpServletRequest
        HttpServletResponse response = (HttpServletResponse) servletResponse;   //vrsime kastiranje vo HttpServletResponse

        User user = (User)request.getSession().getAttribute("user");        //kastirame vo user

        String path = request.getServletPath();         //se zema patekata koja ja prakjame

        if(("/create".equals(path) ||
                "/delete/**".equals(path) ||
                "/update/**".equals(path) ||
                "/**/delete-review".equals(path)) && user==null) {    //ako taa pateka ne e /login ili /main.css ili user da e null
            response.sendRedirect("/login");    //ke go redirektirame kon /login stranickata, bidejki ovie se public strani i sekoj na niv moze da pristapi za da se logira i prodolzi so aktivnost
        } else {
            filterChain.doFilter(servletRequest,servletResponse);   //vo sprotivno prikazi filter i zabrani
        }
    }

    @Override
    public void destroy() {

    }
}

