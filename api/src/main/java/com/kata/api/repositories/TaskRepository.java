package com.kata.api.repositories;

import org.springframework.data.repository.CrudRepository;

import com.kata.api.models.TaskModel;

public interface TaskRepository extends CrudRepository<TaskModel, Long> {
}
