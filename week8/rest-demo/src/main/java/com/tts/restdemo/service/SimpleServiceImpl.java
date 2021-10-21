package com.tts.restdemo.service;

import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.Date;

@Service
public class SimpleServiceImpl implements SimpleService {

	LocalDate current_date = LocalDate.now();
	int current_Year = current_date.getYear();

	@Override
	public boolean isInFuture(int yearOfBirth) {
		return yearOfBirth > current_Year;
	}

	@Override
	public int calculateAge(int yearOfBirth) {
		return current_Year - yearOfBirth;
	}

}
