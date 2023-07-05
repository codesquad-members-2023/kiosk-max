package team04.kioskbe.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
import team04.kioskbe.order.repository.OrderSequence;

import java.time.LocalDate;
import java.util.concurrent.atomic.AtomicLong;

@EnableWebMvc
@Configuration
public class AppConfig {

    @Bean
    public OrderSequence orderSequence() {
        return new OrderSequence(new AtomicLong(), LocalDate.now());
    }

    @Bean
    public WebMvcConfigurer corsConfigurer() {
        return new WebMvcConfigurer() {
            @Override
            public void addCorsMappings(CorsRegistry registry) {
                registry.addMapping("/drinks").allowedOrigins("http://52.79.68.54:3000","http://localhost:3000");
                registry.addMapping("/drinks/categories").allowedOrigins("http://52.79.68.54:3000","http://localhost:3000");
                registry.addMapping("/orders/payments").allowedOrigins("http://52.79.68.54:3000","http://localhost:3000");
                registry.addMapping("/orders").allowedOrigins("http://52.79.68.54:3000","http://localhost:3000");
                registry.addMapping("/orders/*").allowedOrigins("http://52.79.68.54:3000","http://localhost:3000");
            }
        };
    }
}
