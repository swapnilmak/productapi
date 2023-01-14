package com.tsystems.orderservice.controller;

import com.tsystems.model.Order;
import com.tsystems.model.OrderEvent;
import com.tsystems.orderservice.kafka.OrderProducer;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.UUID;

@RestController
    @RequestMapping("/api/v1")
public class OrderController {

    private OrderProducer orderProducer;

    public OrderController(OrderProducer orderProducer) {
        this.orderProducer = orderProducer;
    }

    @PostMapping("/orders")
    public String placeOrder(@RequestBody Order order){
        order.setOrderId(UUID.randomUUID().toString());
        OrderEvent event = new OrderEvent();
        event.setStatus("Pending");
        event.setMessage("Order Status is in pending state");
        event.setOrder(order);

        orderProducer.sendMessage(event);

        return "Order Placed Successfully...!!";
    }
}
