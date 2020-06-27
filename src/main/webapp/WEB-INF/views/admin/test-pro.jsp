<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<jsp:include page="../common-script.jsp"></jsp:include>
<jsp:include page="../navbar/footer.jsp"></jsp:include>
 
 <script src="entities/test-pro-controller.js"></script>


<div class="row">
	<div class="col-md-12 col-lg-12">
		<div class="test-pro">
			<nav class="navbar navbar-inverse">
  				<div class="container-fluid">
      				<ul class="nav navbar-nav navbar-right">
 		 				<li><a href="/logout"><span class="glyphicon glyphicon-log-out"></span>Log out</a></li> 
       				</ul>
    			</div>
		 </nav>
		</div>
	</div>
</div>

<div class="row">
<div class="col-md-12 col-lg-12">
	<div class="col-sm-2">
<label for="name">EMPLOYEE name</label>
                                        <select id="multiselect" name="uname" class="form-control" multiple="multiple">
                                             <c:forEach var="name" items="${names}">
                                                <option value="${name}">${name}</option>
                                            </c:forEach> 
                                        </select>



	</div>
	<div class="col-sm-1">
		<button id="delNames" class="btn btn-danger" >Delete</button>
	</div>
	</div>
		
</div>

        <div class="col-sm-10 col-sm-offset-1">
                        <div class="jumbotron">
                            <div class="row">
                                <div class="col-sm-2 col-sm-offset-1">

                               <table id="example" class="display" style="width:100%">
        <thead>
            <tr>
                <th>id</th>
                <th>firstName</th>
                <th>lastName</th>
                <th><button id="delete" class="btn btn-danger btn-xs" >Delete</button></th>
            </tr>
        </thead>
        <tfoot>
            <tr>
                <th>Name</th>
                <th>Position</th>
                <th>Office</th>
            </tr>
        </tfoot>
    </table>
                                </div>
                            </div>
                        </div>
                    </div>


