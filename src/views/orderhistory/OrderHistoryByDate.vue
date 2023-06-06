<template>
    <layout>
        <template #content>
            <div class="container">
      <div class="breadcrumbs">
        パンくずリスト > <a href="">パンくずリスト</a>
      </div>
    </div>
      
    <main>

      <div class="section_header">
        <h2 class="section_title">注文履歴・「日次」帳票</h2>
      </div>

      <div class="column2_container">
        <div class="column2 flex_wrap reverse">
          <div class="main">

            <section>
              <div class="container">
                
                <div class="order_history">
                  <input type="text" class="datepicker" name="" value="2022年09月01日(木)"> ~ <input type="text" class="datepicker" name="" value="2022年09月07日(水)">
                </div>
                
                <div class="filter_container">
                  <div class="filter_box">
                    <div class="flex_wrap">
                      <div class="filter_headline">
                        絞り込む
                      </div>
                      <div class="filter_item">
                        <div class="flex_wrap">
                          <div class="filter_item_box">
                            予約中
                          </div>
                          <div class="filter_item_box">
                            確定中
                          </div>
                          <div class="filter_item_box">
                            引渡済
                          </div>
                          <div class="filter_item_box">
                            取消し
                          </div>
                        </div>
                        <div class="select">
                          <select>
                            <option value="" checked>企画部　佐々木小次郎</option>
                            <option value="">営業部　鈴木太一</option>
                            <option value="">すべての注文を確認する</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>


                <div class="filter_result">

                  <div class="filter_frame">
                    <table>

                      <tr>
                        <th>引渡し日</th>
                        <td>
                          2022年9月1日（木）
                        </td>
                      </tr>

                      <tr>
                        <th>注文者</th>
                        <td>
                          秋山愛子                        
                        </td>
                      </tr>
                      <tr>
                        <th>引渡し先</th>
                        <td>
                          東京都立第一中学校
                        </td>
                      </tr>
                      <tr>
                        <th>注文内容</th>
                        <td>
                          <span class="price">合計　1個　400円</span>
                           … 
                           <div class="item_detail_link">
                            <a href="cart-lunch_p6_2.html">
                               詳細
                            </a>
                           </div>
                        </td>
                      </tr>
                      <tr>
                        <th>ステータス</th>
                        <td>
                          <span class="status">引渡済</span>
                        </td>
                      </tr>

                    </table>
                  </div>


                  <div class="filter_frame">
                    <table>

                      <tr>
                        <th>引渡し日</th>
                        <td>
                          2022年9月1日（木）
                        </td>
                      </tr>

                      <tr>
                        <th>注文者</th>
                        <td>
                          秋山愛子                        
                        </td>
                      </tr>
                      <tr>
                        <th>引渡し先</th>
                        <td>
                          東京都立第一中学校
                        </td>
                      </tr>
                      <tr>
                        <th>注文内容</th>
                        <td>
                          <span class="price">合計　1個　400円</span>
                           … 
                           <div class="item_detail_link">
                            <a href="cart-lunch_p6_2.html">
                               詳細
                            </a>
                           </div>
                        </td>
                      </tr>
                      <tr>
                        <th>ステータス</th>
                        <td>
                          <span class="status">確定中</span>
                        </td>
                      </tr>

                    </table>
                  </div>


                </div>

                <div class="reserve_container">
                  <div class="filter_total">
                    <p class="price">
                      合計
                      <span class="total_num">2個</span>
                      <span class="total_price">800円</span>
                    </p>
                  </div>
                  <div class="button">
                    <div>
                      <input type="submit" class="button01" name="Submit" value="この内容で出力する">
                    </div>
                  </div>
                </div>

              </div>
            </section>

              <div class="cover"></div>
              <div class="popup">
                <div class="close">×</div>
                <div class="popup_box">
                </div>
              </div>


          </div>
          <div id="side" class="side">
          </div>
        </div>
      </div>



    </main>
        </template>
    </layout>
</template>

<script setup>
import layout from '../layout/App.vue'
</script>