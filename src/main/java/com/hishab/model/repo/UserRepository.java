package com.hishab.model.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.hishab.model.User;

public interface UserRepository extends JpaRepository<User, Long> {

	@Query("select u.firstName from User u")
	String[] getDropdown();
	
	@Query("select u.firstName from User u")
	 List<String> deleteByName();

	@Modifying
	@Query("delete from User u where u.firstName in(:names)")
	void deleteByName(List<String> names);

	@Modifying
	@Query("delete from User u where u.id in(:selected)")
	void deleteByIds(@Param("selected")List<Long> selected);

}
