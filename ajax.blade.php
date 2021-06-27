<!doctype html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <script src="https://code.jquery.com/jquery-3.6.0.js" integrity="sha256-H+K7U5CnXl1h5ywQfKtSj8PCmoN9aaq30gDh27Xc0jk=" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>

    <title>Ajax Curd</title>
  </head>
  <body>
    <div class="container">
        <div class="row">
            <div class="col-sm-9">    
                  <table class="table">
                    <thead>
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                      </tr>
                    </thead>
                    <tbody>                
                        @foreach ($students as $student)
                            <tr>
                                <th scope="row">{{ $loop->index+1 }}</th>
                                <td>{{ $student->username }}</td>
                                <td>{{ $student->useremail }}</td>
                            </tr>
                        @endforeach 
                    </tbody>
                  </table>

                  <form id="studentForm" action="{{ route('student.store') }}"  method="post">
                    @csrf
                    <div class="form-group">
                      <label for="userName">Name</label>
                      <input type="text" name="username" class="form-control" id="userName" placeholder="Enter Name">
                    </div>
                    <div class="form-group">
                      <label for="userEmail">Email</label>
                      <input type="email" name="useremail" class="form-control" id="userEmail" placeholder="Email">
                    </div>
                    <input type="submit" name="submit" class="btn btn-primary"/>
                  </form>


            </div>
        </div>
    </div>
    <script>
        $("#studentForm").submit(function(e){
            e.preventDefault();
            $.ajax({
                url:"{{ route('student.store') }}",
                data:$("#studentForm").serialize(),
                type:"post",
                success:function(result){
                    $("#msg").html(result.msg) // show message
                    $("#studentForm")['0'].reset(); //empty form
                }
            })
        })
    </script>
  </body>
</html>
