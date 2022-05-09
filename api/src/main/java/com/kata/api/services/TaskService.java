package com.kata.api.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;

import com.kata.api.models.TaskModel;
import com.kata.api.repositories.TaskRepository;

@Service
public class TaskService {
    @Autowired
    private TaskRepository taskRepository;

    public TaskModel createTask(TaskModel taskModel) {
        return taskRepository.save(taskModel);
    }

    public ArrayList<TaskModel> getAllTask() {
        return (ArrayList<TaskModel>) taskRepository.findAll();
    }

    public TaskModel getTaskById(long id) {
        return taskRepository.findById(id).get();
    }

    public TaskModel updateTask(TaskModel taskModel) {
        return taskRepository.save(taskModel);
    }

    public boolean deleteTask(long id) {
        if (taskRepository.existsById(id)) {
            taskRepository.deleteById(id);
            return true;
        } else {
            return false;
        }
    }
}
