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

        HttpServletRequest request = (HttpServletRequest) servletRequest;
        HttpServletResponse response = (HttpServletResponse) servletResponse;

        User user = (User)request.getSession().getAttribute("user");

        String path = request.getServletPath();

        // /shop/create filterot raboti
        // /shop/delete/** filterot ne znaeme dali raboti
        // /shop/update filterot raboti
        // */delete-review fitlerot ne raboti

        if(("/shop/create".equals(path) ||
                "/shop/delete/**".equals(path) ||
                "/shop/update".equals(path) ||
                "*/delete-review".equals(path)) && user==null) {
            response.sendRedirect("/login");
        } else {
            filterChain.doFilter(servletRequest,servletResponse);
        }
    }

    @Override
    public void destroy() {

    }
}

