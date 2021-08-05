<?php
    class DB{
        private $dbHost="localhost";
        private $dbUser="root";
        private $dbPassword="";
        private $dbName="localhost";
        //construimos el constructor
        public function __construct()
        {
            if(!isset($this->db))
            {
                $conexion=new mysqli($this->$dbHost,$this->$dbUser,$this->$dbPassword,$this->$dbName);
                if($conexion->connect_error)
                {
                    die("FALLO EN CONECTAR A LA BASE DE DATOS:".$conexion->connect_error);
                }
                else{
                    $this->db=$conexion;
                }
            }
        }
        //verificar si la tabla esta vacia
        public function realizarConsulta($entrada)
        {
            $result=$this->db->query($entrada);
            if($result->num_rows)
            {
                return false;
            }
            return true;
        }
        
    }
?>