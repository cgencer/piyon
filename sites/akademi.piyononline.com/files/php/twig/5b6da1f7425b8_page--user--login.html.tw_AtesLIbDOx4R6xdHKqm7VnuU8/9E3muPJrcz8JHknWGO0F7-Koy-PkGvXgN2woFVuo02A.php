<?php

/* sites/all/themes/gavias_unix/templates/user/page--user--login.html.twig */
class __TwigTemplate_a409b491e10ec71d39e7c593d77ae79a816dc42e08911b50cfd20a150306918c extends Twig_Template
{
    public function __construct(Twig_Environment $env)
    {
        parent::__construct($env);

        $this->parent = false;

        $this->blocks = array(
        );
    }

    protected function doDisplay(array $context, array $blocks = array())
    {
        $tags = array("include" => 9, "if" => 13);
        $filters = array();
        $functions = array();

        try {
            $this->env->getExtension('Twig_Extension_Sandbox')->checkSecurity(
                array('include', 'if'),
                array(),
                array()
            );
        } catch (Twig_Sandbox_SecurityError $e) {
            $e->setSourceContext($this->getSourceContext());

            if ($e instanceof Twig_Sandbox_SecurityNotAllowedTagError && isset($tags[$e->getTagName()])) {
                $e->setTemplateLine($tags[$e->getTagName()]);
            } elseif ($e instanceof Twig_Sandbox_SecurityNotAllowedFilterError && isset($filters[$e->getFilterName()])) {
                $e->setTemplateLine($filters[$e->getFilterName()]);
            } elseif ($e instanceof Twig_Sandbox_SecurityNotAllowedFunctionError && isset($functions[$e->getFunctionName()])) {
                $e->setTemplateLine($functions[$e->getFunctionName()]);
            }

            throw $e;
        }

        // line 7
        echo "
<div class=\"page-user-login gva-body-page\">
   ";
        // line 9
        $this->loadTemplate((($context["directory"] ?? null) . "/templates/page/parts/preloader.html.twig"), "sites/all/themes/gavias_unix/templates/user/page--user--login.html.twig", 9)->display($context);
        // line 10
        echo "   <div class=\"bg\"></div>
   <div role=\"main\" class=\"main main-page\">
      <div class=\"branding text-center\">
         ";
        // line 13
        if ($this->getAttribute(($context["page"] ?? null), "branding", array())) {
            // line 14
            echo "            ";
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute(($context["page"] ?? null), "branding", array()), "html", null, true));
            echo "
         ";
        }
        // line 16
        echo "      </div>
      ";
        // line 17
        if ($this->getAttribute(($context["page"] ?? null), "help", array())) {
            // line 18
            echo "         <div class=\"help show\">
            <div class=\"container\">
               <div class=\"content-inner\">
                  ";
            // line 21
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute(($context["page"] ?? null), "help", array()), "html", null, true));
            echo "
               </div>
            </div>
         </div>
      ";
        }
        // line 26
        echo "      <div class=\"clearfix\"></div>
      <div id=\"content\" class=\"content content-full\">
         ";
        // line 28
        if ($this->getAttribute(($context["page"] ?? null), "content", array())) {
            // line 29
            echo "            <div class=\"content-main\">
               ";
            // line 30
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute(($context["page"] ?? null), "content", array()), "html", null, true));
            echo "
            </div>
         ";
        }
        // line 33
        echo "      </div>
   </div>
</div>
";
    }

    public function getTemplateName()
    {
        return "sites/all/themes/gavias_unix/templates/user/page--user--login.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  95 => 33,  89 => 30,  86 => 29,  84 => 28,  80 => 26,  72 => 21,  67 => 18,  65 => 17,  62 => 16,  56 => 14,  54 => 13,  49 => 10,  47 => 9,  43 => 7,);
    }

    /** @deprecated since 1.27 (to be removed in 2.0). Use getSourceContext() instead */
    public function getSource()
    {
        @trigger_error('The '.__METHOD__.' method is deprecated since version 1.27 and will be removed in 2.0. Use getSourceContext() instead.', E_USER_DEPRECATED);

        return $this->getSourceContext()->getCode();
    }

    public function getSourceContext()
    {
        return new Twig_Source("", "sites/all/themes/gavias_unix/templates/user/page--user--login.html.twig", "/home/piyon/v8/sites/all/themes/gavias_unix/templates/user/page--user--login.html.twig");
    }
}
