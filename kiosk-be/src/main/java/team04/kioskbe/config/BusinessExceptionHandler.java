package team04.kioskbe.config;

import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import team04.kioskbe.order.service.CardPaymentFailureException;
import team04.kioskbe.order.service.InterruptedBusinessException;

@RestControllerAdvice
public class BusinessExceptionHandler {

    @ExceptionHandler(CardPaymentFailureException.class)
    public ResponseEntity<String> cardPaymentFailureExceptionHandler(
            CardPaymentFailureException e) {
        return ResponseEntity.badRequest().contentType(MediaType.APPLICATION_JSON_UTF8)
                .body(e.getMessage());
    }

    @ExceptionHandler(InterruptedBusinessException.class)
    public ResponseEntity<String> interruptedBusinessExceptionHandler(
            InterruptedBusinessException e) {
        return ResponseEntity.internalServerError().contentType(MediaType.APPLICATION_JSON_UTF8)
                .body(e.getMessage());
    }
}
