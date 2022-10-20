# test-task-1-server
Сервер к которому SPA делает запрос для получения начальной базы данных, использует postgradesql для создания базы данных, 
express и cors для обработки запросов от клиентской части
имеет три endpoint-а которые прослушивают адрес http://localhost:3080/api/table/ и реализуют три функции
router.post('/table', userController.createTableData) Создание нового элемента базы данных
router.get('/table', userController.getTableData) Отправка всех существующих элеметнов бд
router.delete('/table/:id', userController.deleteTableData) Удаление элемента базы данных 
