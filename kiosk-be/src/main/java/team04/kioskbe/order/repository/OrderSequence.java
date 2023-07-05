package team04.kioskbe.order.repository;

import java.time.LocalDate;
import java.util.concurrent.atomic.AtomicLong;

public class OrderSequence {

    private AtomicLong dailyId;
    private LocalDate date;

    public OrderSequence(final AtomicLong dailyId, final LocalDate date) {
        this.dailyId = dailyId;
        this.date = date;
    }

    public long createDailyOrderId() {
        if (LocalDate.now().isAfter(date)) {
            date = LocalDate.now();
            dailyId = new AtomicLong();
        }
        return dailyId.incrementAndGet();
    }

}
