package com.tsystems.stockservice.config;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.apache.kafka.common.serialization.StringDeserializer;
import org.springframework.boot.autoconfigure.kafka.KafkaProperties;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.kafka.core.DefaultKafkaConsumerFactory;
import org.springframework.kafka.support.serializer.JsonDeserializer;

import java.util.Map;

@Configuration
public class KafkaConfig {

   /* @Bean
    DefaultKafkaConsumerFactory kafkaConsumerFactory(KafkaProperties properties, ObjectMapper objectMapper) {
        Map<String, Object> consumerProperties = properties.buildConsumerProperties();
        JsonDeserializer<Object> jsonDeserializer = new JsonDeserializer<>(objectMapper);
        jsonDeserializer.configure(consumerProperties, false);

        return new DefaultKafkaConsumerFactory(consumerProperties,
                new StringDeserializer(), jsonDeserializer);
    }
*/
}
